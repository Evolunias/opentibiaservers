import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-website');
}

export default function OldSchoolEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-website" />;
}
