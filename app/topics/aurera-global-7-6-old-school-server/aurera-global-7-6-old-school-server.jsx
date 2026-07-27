import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-6-old-school-server');
}

export default function AureraGlobal76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-6-old-school-server" />;
}
