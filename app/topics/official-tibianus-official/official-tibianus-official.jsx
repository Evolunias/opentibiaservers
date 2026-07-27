import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-official');
}

export default function OfficialTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-official" />;
}
