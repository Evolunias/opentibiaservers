import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-south-america');
}

export default function OldSchoolPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-south-america" />;
}
