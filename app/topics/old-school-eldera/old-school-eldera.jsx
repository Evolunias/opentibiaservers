import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera');
}

export default function OldSchoolElderaKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera" />;
}
