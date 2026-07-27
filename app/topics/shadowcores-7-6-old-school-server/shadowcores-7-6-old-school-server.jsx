import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-old-school-server');
}

export default function Shadowcores76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-old-school-server" />;
}
