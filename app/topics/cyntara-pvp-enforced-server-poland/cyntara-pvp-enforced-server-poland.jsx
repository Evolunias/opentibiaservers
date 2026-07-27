import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-poland');
}

export default function CyntaraPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-poland" />;
}
