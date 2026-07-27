import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-old-school-server');
}

export default function AureraGlobal11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-old-school-server" />;
}
