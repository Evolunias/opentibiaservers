import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-poland');
}

export default function TibiascapePvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-poland" />;
}
