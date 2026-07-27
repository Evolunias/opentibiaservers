import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-usa');
}

export default function AureraGlobalOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-usa" />;
}
