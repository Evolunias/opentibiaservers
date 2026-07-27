import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-non-pvp-server');
}

export default function Tibiascape1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-non-pvp-server" />;
}
