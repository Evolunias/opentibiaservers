import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-south-america');
}

export default function ArcaniarlOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-south-america" />;
}
