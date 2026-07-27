import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-98-old-school-server');
}

export default function Arcaniarl1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-98-old-school-server" />;
}
