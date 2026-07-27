import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-france');
}

export default function ArcaniarlOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-france" />;
}
