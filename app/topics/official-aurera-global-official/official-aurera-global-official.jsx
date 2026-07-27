import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-official');
}

export default function OfficialAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-official" />;
}
