import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-ot');
}

export default function CurrentTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-ot" />;
}
