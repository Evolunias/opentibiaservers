import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-old-school-server');
}

export default function Arcaniarl86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-old-school-server" />;
}
