import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots');
}

export default function OldSchoolYurotsKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots" />;
}
