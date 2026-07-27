import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-poland');
}

export default function ArcaniarlOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-poland" />;
}
