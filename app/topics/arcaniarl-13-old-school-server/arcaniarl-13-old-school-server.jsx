import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-old-school-server');
}

export default function Arcaniarl13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-old-school-server" />;
}
