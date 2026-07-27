import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-old-school-server');
}

export default function Kasteria12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-old-school-server" />;
}
