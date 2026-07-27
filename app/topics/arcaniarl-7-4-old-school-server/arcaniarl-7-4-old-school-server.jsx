import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-old-school-server');
}

export default function Arcaniarl74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-old-school-server" />;
}
