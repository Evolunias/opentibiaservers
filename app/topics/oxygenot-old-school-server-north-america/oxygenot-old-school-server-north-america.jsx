import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-north-america');
}

export default function OxygenotOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-north-america" />;
}
