import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-usa');
}

export default function ArcaniarlOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-usa" />;
}
