import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-rules');
}

export default function OldSchoolXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-rules" />;
}
