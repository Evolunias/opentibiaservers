import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-client');
}

export default function ActiveTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-client" />;
}
