import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-ot');
}

export default function OldSchoolYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-ot" />;
}
