import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-ot');
}

export default function FreshStartTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-ot" />;
}
