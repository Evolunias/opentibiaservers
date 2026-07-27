import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-uk');
}

export default function ArcaniarlOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-uk" />;
}
