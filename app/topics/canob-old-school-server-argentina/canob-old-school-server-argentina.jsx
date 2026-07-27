import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-argentina');
}

export default function CanobOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-argentina" />;
}
