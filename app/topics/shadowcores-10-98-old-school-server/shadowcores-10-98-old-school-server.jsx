import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-98-old-school-server');
}

export default function Shadowcores1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-98-old-school-server" />;
}
