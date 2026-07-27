import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-official');
}

export default function OldSchoolElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-official" />;
}
