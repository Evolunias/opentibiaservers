import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-mexico');
}

export default function OldSchoolServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-mexico" />;
}
