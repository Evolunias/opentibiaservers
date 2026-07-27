import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global');
}

export default function FreshStartAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global" />;
}
