import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-online');
}

export default function OldSchoolCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-online" />;
}
