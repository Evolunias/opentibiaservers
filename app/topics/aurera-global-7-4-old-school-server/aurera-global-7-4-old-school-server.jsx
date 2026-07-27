import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-4-old-school-server');
}

export default function AureraGlobal74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-4-old-school-server" />;
}
