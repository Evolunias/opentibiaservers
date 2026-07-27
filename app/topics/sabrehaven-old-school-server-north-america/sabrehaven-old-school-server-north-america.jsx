import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-north-america');
}

export default function SabrehavenOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-north-america" />;
}
