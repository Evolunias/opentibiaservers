import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-europe');
}

export default function AureraGlobalOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-europe" />;
}
