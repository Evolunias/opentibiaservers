import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-ots');
}

export default function ActiveTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-ots" />;
}
