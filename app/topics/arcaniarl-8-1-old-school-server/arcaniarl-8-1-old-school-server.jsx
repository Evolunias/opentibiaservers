import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-old-school-server');
}

export default function Arcaniarl81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-old-school-server" />;
}
