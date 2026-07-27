import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame');
}

export default function CustomTibiameKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame" />;
}
