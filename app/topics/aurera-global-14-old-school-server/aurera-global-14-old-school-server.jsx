import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-old-school-server');
}

export default function AureraGlobal14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-old-school-server" />;
}
