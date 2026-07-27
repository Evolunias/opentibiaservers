import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-official');
}

export default function OldSchoolCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-official" />;
}
