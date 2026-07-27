import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-old-school');
}

export default function NonPvpOtServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-old-school" />;
}
