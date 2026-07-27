import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-canada');
}

export default function ArcaniarlOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-canada" />;
}
