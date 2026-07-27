import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-argentina');
}

export default function SabrehavenOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-argentina" />;
}
