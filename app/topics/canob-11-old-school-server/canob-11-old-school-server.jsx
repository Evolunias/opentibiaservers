import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-old-school-server');
}

export default function Canob11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-old-school-server" />;
}
