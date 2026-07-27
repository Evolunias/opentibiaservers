import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-poland-server');
}

export default function MistOfDeathPolandServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-poland-server" />;
}
