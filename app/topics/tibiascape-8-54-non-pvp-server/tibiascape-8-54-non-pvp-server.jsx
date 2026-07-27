import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-54-non-pvp-server');
}

export default function Tibiascape854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-54-non-pvp-server" />;
}
