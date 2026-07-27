import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-sweden');
}

export default function ArcaniarlOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-sweden" />;
}
