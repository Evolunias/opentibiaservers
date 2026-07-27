import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-argentina-server');
}

export default function ImperianicArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-argentina-server" />;
}
