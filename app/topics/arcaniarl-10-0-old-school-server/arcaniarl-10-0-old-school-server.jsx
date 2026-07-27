import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-old-school-server');
}

export default function Arcaniarl100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-old-school-server" />;
}
