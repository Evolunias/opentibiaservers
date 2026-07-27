import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-0-old-school-server');
}

export default function Shadowcores80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-0-old-school-server" />;
}
