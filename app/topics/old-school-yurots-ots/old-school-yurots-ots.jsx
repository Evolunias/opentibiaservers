import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-ots');
}

export default function OldSchoolYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-ots" />;
}
