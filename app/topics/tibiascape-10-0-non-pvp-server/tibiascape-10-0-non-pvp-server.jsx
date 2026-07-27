import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-non-pvp-server');
}

export default function Tibiascape100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-non-pvp-server" />;
}
