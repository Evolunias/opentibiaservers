import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-old-school-server');
}

export default function Kasteria100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-old-school-server" />;
}
