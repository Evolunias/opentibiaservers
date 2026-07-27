import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-ot');
}

export default function FreshStartTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-ot" />;
}
