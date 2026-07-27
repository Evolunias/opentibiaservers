import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-98-old-school-server');
}

export default function Kasteria1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-98-old-school-server" />;
}
