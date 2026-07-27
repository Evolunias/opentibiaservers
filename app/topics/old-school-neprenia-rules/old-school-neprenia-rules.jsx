import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-rules');
}

export default function OldSchoolNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-rules" />;
}
