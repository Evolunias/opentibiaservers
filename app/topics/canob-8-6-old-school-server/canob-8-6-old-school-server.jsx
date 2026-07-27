import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-6-old-school-server');
}

export default function Canob86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-6-old-school-server" />;
}
