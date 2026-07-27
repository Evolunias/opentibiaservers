import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-germany');
}

export default function OxygenotOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-germany" />;
}
