import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-client');
}

export default function CustomTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-client" />;
}
