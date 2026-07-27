import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara');
}

export default function OldSchoolCyntaraKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara" />;
}
