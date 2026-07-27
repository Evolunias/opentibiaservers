import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-germany');
}

export default function TibiascapePvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-germany" />;
}
