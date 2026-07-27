import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-poland');
}

export default function TibiascapeNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-poland" />;
}
