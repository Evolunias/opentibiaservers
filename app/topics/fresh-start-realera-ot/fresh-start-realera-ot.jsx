import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-ot');
}

export default function FreshStartRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-ot" />;
}
