import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-latin-america');
}

export default function OxygenotOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-latin-america" />;
}
