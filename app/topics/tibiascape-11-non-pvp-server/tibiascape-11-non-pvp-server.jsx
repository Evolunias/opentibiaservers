import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-non-pvp-server');
}

export default function Tibiascape11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-non-pvp-server" />;
}
