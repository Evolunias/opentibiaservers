import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-old-school-server');
}

export default function Kasteria81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-old-school-server" />;
}
