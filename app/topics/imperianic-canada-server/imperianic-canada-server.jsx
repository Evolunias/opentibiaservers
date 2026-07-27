import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-canada-server');
}

export default function ImperianicCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-canada-server" />;
}
