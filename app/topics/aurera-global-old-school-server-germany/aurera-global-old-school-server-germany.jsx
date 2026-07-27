import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-germany');
}

export default function AureraGlobalOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-germany" />;
}
