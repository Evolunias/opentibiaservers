import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-ot');
}

export default function FreshStartAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-ot" />;
}
