import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-usa');
}

export default function OxygenotOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-usa" />;
}
