import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-old-school-server');
}

export default function Shadowcores14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-old-school-server" />;
}
