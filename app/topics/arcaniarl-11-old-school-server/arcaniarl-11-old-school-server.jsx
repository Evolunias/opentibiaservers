import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-old-school-server');
}

export default function Arcaniarl11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-old-school-server" />;
}
