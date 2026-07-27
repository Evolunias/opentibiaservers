import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-ot');
}

export default function ActiveTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-ot" />;
}
