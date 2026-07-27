import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-rules');
}

export default function OldSchoolRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-rules" />;
}
