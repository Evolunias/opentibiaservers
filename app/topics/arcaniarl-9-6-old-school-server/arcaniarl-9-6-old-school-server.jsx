import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-old-school-server');
}

export default function Arcaniarl96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-old-school-server" />;
}
