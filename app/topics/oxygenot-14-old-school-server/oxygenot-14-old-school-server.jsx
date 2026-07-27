import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-old-school-server');
}

export default function Oxygenot14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-old-school-server" />;
}
