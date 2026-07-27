import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-usa');
}

export default function SabrehavenOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-usa" />;
}
