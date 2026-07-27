import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-server');
}

export default function ImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-server" />;
}
