import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-old-school-server');
}

export default function Arcaniarl14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-old-school-server" />;
}
