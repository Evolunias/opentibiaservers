import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-poland-servers');
}

export default function MistOfDeathPolandServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-poland-servers" />;
}
