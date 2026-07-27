import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-client');
}

export default function OldSchoolElderaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-client" />;
}
