import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-canada');
}

export default function OxygenotOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-canada" />;
}
