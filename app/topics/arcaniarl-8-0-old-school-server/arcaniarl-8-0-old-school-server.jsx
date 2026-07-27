import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-old-school-server');
}

export default function Arcaniarl80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-old-school-server" />;
}
