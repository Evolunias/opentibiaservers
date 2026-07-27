import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-client');
}

export default function OldSchoolSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-client" />;
}
