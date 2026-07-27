import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-rules');
}

export default function OldSchoolElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-rules" />;
}
