import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-ot');
}

export default function LowrateTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-ot" />;
}
