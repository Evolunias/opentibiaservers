import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-1-old-school-server');
}

export default function Canob81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-1-old-school-server" />;
}
