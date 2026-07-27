import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-old-school-server');
}

export default function Kasteria96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-old-school-server" />;
}
