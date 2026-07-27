import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-website');
}

export default function OldSchoolCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-website" />;
}
