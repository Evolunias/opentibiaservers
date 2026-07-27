import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-mexico');
}

export default function SabrehavenOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-mexico" />;
}
