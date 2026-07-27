import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-0-old-school-server');
}

export default function AureraGlobal80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-0-old-school-server" />;
}
