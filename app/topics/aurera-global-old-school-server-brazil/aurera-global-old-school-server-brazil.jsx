import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-brazil');
}

export default function AureraGlobalOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-brazil" />;
}
