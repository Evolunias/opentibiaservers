import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-old-school-server');
}

export default function Canob12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-old-school-server" />;
}
