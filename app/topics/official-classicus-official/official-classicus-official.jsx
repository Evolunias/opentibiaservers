import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-official');
}

export default function OfficialClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-official" />;
}
