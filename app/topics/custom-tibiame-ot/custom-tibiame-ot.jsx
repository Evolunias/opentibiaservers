import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-ot');
}

export default function CustomTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-ot" />;
}
