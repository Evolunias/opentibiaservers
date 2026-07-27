import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-official');
}

export default function OfficialKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-official" />;
}
