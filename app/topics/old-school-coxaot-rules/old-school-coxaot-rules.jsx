import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-rules');
}

export default function OldSchoolCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-rules" />;
}
