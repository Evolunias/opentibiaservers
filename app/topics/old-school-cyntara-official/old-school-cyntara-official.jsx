import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-official');
}

export default function OldSchoolCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-official" />;
}
