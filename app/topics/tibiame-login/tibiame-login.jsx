import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-login');
}

export default function TibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="tibiame-login" />;
}
