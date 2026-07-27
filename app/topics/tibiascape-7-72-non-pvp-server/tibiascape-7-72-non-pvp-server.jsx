import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-72-non-pvp-server');
}

export default function Tibiascape772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-72-non-pvp-server" />;
}
