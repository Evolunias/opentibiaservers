import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-classicus-server');
}

export default function PvpEnforcedClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-classicus-server" />;
}
