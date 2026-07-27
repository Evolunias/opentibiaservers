import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-login');
}

export default function ActiveTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-login" />;
}
