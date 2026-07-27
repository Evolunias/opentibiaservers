import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-old-school-server');
}

export default function Kasteria13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-old-school-server" />;
}
