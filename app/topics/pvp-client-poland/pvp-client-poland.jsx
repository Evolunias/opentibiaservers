import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-poland');
}

export default function PvpClientPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-poland" />;
}
