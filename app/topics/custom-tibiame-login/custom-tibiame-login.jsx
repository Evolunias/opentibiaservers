import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-login');
}

export default function CustomTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-login" />;
}
