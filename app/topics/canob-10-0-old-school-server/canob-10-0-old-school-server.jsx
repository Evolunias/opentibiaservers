import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-old-school-server');
}

export default function Canob100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-old-school-server" />;
}
