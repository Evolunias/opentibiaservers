import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-ot');
}

export default function CurrentTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-ot" />;
}
