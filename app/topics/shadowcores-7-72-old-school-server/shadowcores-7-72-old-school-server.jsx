import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-72-old-school-server');
}

export default function Shadowcores772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-72-old-school-server" />;
}
