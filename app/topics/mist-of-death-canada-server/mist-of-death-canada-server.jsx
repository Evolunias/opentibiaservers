import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-canada-server');
}

export default function MistOfDeathCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-canada-server" />;
}
