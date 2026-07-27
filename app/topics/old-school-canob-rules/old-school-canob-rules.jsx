import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-rules');
}

export default function OldSchoolCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-rules" />;
}
