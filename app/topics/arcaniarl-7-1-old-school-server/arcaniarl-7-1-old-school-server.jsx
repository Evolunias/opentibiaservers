import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-old-school-server');
}

export default function Arcaniarl71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-old-school-server" />;
}
