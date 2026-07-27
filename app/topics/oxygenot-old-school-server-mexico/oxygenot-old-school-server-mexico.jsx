import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-mexico');
}

export default function OxygenotOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-mexico" />;
}
