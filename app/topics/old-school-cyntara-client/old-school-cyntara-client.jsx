import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-client');
}

export default function OldSchoolCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-client" />;
}
