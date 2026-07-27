import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-old-school-server');
}

export default function Canob96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-old-school-server" />;
}
