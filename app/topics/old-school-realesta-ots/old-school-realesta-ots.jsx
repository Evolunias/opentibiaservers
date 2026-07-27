import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-ots');
}

export default function OldSchoolRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-ots" />;
}
