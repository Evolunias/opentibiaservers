import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-old-school-server');
}

export default function Canob71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-old-school-server" />;
}
