import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-canada');
}

export default function AureraGlobalOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-canada" />;
}
