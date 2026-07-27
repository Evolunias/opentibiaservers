import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-old-school-server');
}

export default function AureraGlobal15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-old-school-server" />;
}
