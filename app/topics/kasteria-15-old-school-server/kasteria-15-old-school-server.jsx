import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-old-school-server');
}

export default function Kasteria15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-old-school-server" />;
}
