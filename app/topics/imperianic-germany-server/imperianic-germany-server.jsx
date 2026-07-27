import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-germany-server');
}

export default function ImperianicGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-germany-server" />;
}
