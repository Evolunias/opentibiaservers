import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-server');
}

export default function MistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-server" />;
}
