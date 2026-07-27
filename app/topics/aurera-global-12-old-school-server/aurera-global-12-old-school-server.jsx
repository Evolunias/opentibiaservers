import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-old-school-server');
}

export default function AureraGlobal12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-old-school-server" />;
}
