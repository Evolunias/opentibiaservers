import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-ot');
}

export default function OfficialAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-ot" />;
}
