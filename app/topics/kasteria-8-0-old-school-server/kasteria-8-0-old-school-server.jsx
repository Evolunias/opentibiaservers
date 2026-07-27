import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-old-school-server');
}

export default function Kasteria80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-old-school-server" />;
}
