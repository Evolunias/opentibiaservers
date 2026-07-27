import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-ot');
}

export default function ActiveAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-ot" />;
}
