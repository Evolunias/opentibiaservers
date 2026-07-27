import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-poland');
}

export default function AureraGlobalOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-poland" />;
}
