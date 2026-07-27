import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-ots');
}

export default function OldSchoolRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-ots" />;
}
