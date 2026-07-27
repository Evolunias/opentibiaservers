import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-non-pvp-server');
}

export default function Tibiascape74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-non-pvp-server" />;
}
