import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-old-school-server');
}

export default function Shadowcores71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-old-school-server" />;
}
