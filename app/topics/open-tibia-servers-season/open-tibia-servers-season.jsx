import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-season');
}

export default function OpenTibiaServersSeasonKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-season" />;
}
