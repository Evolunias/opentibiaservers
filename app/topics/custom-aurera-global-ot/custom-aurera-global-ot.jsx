import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-ot');
}

export default function CustomAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-ot" />;
}
