import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-old-school-server');
}

export default function Shadowcores13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-old-school-server" />;
}
