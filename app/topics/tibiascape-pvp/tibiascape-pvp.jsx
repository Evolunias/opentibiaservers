import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp');
}

export default function TibiascapePvpKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp" />;
}
