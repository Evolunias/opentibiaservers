import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-old-school-server');
}

export default function Shadowcores11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-old-school-server" />;
}
