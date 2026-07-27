import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-old-school-server');
}

export default function Shadowcores100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-old-school-server" />;
}
