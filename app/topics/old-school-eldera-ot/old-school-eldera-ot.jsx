import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-ot');
}

export default function OldSchoolElderaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-ot" />;
}
