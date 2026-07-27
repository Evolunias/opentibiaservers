import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-north-america');
}

export default function ArcaniarlOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-north-america" />;
}
