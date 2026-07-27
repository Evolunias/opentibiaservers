import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-old-school-server');
}

export default function AureraGlobal13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-old-school-server" />;
}
