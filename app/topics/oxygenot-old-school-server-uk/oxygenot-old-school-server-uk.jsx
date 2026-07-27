import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-uk');
}

export default function OxygenotOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-uk" />;
}
