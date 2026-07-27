import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-old-school-server');
}

export default function AureraGlobal100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-old-school-server" />;
}
