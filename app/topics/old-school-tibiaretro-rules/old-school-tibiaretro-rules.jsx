import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-rules');
}

export default function OldSchoolTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-rules" />;
}
