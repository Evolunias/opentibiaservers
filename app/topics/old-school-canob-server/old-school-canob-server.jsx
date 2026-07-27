import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-server');
}

export default function OldSchoolCanobServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-server" />;
}
