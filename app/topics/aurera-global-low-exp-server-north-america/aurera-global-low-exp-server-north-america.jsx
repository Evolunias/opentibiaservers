import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-low-exp-server-north-america');
}

export default function AureraGlobalLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-low-exp-server-north-america" />;
}
