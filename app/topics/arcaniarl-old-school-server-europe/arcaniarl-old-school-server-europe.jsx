import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-europe');
}

export default function ArcaniarlOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-europe" />;
}
