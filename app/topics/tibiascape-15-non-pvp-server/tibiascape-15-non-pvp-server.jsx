import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-non-pvp-server');
}

export default function Tibiascape15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-non-pvp-server" />;
}
