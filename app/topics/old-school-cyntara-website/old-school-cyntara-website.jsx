import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-website');
}

export default function OldSchoolCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-website" />;
}
