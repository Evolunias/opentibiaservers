import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-europe-server');
}

export default function MistOfDeathEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-europe-server" />;
}
