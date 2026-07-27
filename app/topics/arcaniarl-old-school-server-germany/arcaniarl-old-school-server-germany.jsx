import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-germany');
}

export default function ArcaniarlOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-germany" />;
}
