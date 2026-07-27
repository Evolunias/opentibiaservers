import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-client');
}

export default function FreshStartAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-client" />;
}
