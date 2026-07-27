import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-sweden-server');
}

export default function ImperianicSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-sweden-server" />;
}
