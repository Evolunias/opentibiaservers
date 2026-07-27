import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-poland');
}

export default function OxygenotOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-poland" />;
}
