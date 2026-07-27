import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-1-old-school-server');
}

export default function AureraGlobal71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-1-old-school-server" />;
}
