import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-old-school-server');
}

export default function Arcaniarl12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-old-school-server" />;
}
