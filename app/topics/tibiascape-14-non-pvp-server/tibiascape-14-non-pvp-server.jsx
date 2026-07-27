import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-non-pvp-server');
}

export default function Tibiascape14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-non-pvp-server" />;
}
