import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-germany');
}

export default function SabrehavenOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-germany" />;
}
