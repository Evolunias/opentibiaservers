import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-mexico');
}

export default function ArcaniarlOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-mexico" />;
}
