import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-old-school-server');
}

export default function Arcaniarl84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-old-school-server" />;
}
