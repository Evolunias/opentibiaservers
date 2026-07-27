import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-old-school');
}

export default function PvpEnforcedOtServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-old-school" />;
}
