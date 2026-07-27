import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-ots');
}

export default function FreshStartAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-ots" />;
}
