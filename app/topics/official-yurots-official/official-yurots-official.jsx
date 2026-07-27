import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-official');
}

export default function OfficialYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-official" />;
}
