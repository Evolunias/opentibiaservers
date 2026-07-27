import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-non-pvp-server');
}

export default function Tibiascape76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-non-pvp-server" />;
}
