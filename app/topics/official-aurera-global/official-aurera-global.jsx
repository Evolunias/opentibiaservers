import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global');
}

export default function OfficialAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global" />;
}
