import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-brazil');
}

export default function OldSchoolServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-brazil" />;
}
