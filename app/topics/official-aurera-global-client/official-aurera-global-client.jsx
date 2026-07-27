import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-client');
}

export default function OfficialAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-client" />;
}
