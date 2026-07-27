import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-europe');
}

export default function OxygenotOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-europe" />;
}
