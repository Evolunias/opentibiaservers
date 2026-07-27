import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-72-old-school-server');
}

export default function Canob772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-72-old-school-server" />;
}
