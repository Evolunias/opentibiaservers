import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-old-school-server');
}

export default function Shadowcores74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-old-school-server" />;
}
