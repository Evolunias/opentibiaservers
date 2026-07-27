import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-shop');
}

export default function ArchlightShopKeywordPage() {
  return <StaticKeywordPage slug="archlight-shop" />;
}
