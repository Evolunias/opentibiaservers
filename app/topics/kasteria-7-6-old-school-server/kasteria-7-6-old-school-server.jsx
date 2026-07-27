import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-6-old-school-server');
}

export default function Kasteria76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-6-old-school-server" />;
}
