import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-rules');
}

export default function OldSchoolCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-rules" />;
}
