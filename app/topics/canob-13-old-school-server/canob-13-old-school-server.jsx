import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-old-school-server');
}

export default function Canob13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-old-school-server" />;
}
