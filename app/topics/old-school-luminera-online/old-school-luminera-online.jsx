import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-online');
}

export default function OldSchoolLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-online" />;
}
