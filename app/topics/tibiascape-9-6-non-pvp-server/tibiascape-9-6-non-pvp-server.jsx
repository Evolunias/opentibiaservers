import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-non-pvp-server');
}

export default function Tibiascape96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-non-pvp-server" />;
}
