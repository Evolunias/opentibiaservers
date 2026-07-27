import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-north-america');
}

export default function AureraGlobalOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-north-america" />;
}
