import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-france');
}

export default function UnlinePvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-france" />;
}
