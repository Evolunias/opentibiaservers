import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-1-old-school-server');
}

export default function AureraGlobal81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-1-old-school-server" />;
}
