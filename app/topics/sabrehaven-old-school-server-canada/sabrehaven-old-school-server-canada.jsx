import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-canada');
}

export default function SabrehavenOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-canada" />;
}
