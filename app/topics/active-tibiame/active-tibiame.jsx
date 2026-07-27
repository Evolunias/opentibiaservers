import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame');
}

export default function ActiveTibiameKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame" />;
}
