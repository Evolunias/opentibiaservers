import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-ot');
}

export default function TopAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-ot" />;
}
