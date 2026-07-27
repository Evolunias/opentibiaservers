import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-sweden');
}

export default function CanobOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-sweden" />;
}
