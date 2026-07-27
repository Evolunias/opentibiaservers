import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-old-school-server');
}

export default function Shadowcores84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-old-school-server" />;
}
