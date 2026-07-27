import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-non-pvp-server');
}

export default function Tibiascape86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-non-pvp-server" />;
}
