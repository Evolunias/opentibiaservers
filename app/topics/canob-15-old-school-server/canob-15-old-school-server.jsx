import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-old-school-server');
}

export default function Canob15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-old-school-server" />;
}
