import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-ot');
}

export default function CurrentAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-ot" />;
}
