import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-old-school-server');
}

export default function Kasteria14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-old-school-server" />;
}
