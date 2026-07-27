import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-ots');
}

export default function OldSchoolImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-ots" />;
}
