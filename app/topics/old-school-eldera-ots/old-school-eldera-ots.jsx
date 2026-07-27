import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-ots');
}

export default function OldSchoolElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-ots" />;
}
