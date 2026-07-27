import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-ots');
}

export default function OfficialAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-ots" />;
}
