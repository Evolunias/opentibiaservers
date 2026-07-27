import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-9-6-old-school-server');
}

export default function AureraGlobal96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-9-6-old-school-server" />;
}
