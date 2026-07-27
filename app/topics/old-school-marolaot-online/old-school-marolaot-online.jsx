import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-online');
}

export default function OldSchoolMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-online" />;
}
