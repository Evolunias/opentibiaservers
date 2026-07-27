import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-non-pvp-server');
}

export default function Tibiascape13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-non-pvp-server" />;
}
