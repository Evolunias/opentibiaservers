import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-old-school-server');
}

export default function Shadowcores96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-old-school-server" />;
}
