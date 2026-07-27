import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-ots');
}

export default function CustomTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-ots" />;
}
