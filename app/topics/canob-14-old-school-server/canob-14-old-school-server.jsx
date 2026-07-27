import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-old-school-server');
}

export default function Canob14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-old-school-server" />;
}
