import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-ots');
}

export default function OldSchoolSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-ots" />;
}
