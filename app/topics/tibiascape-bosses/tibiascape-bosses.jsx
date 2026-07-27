import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-bosses');
}

export default function TibiascapeBossesKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-bosses" />;
}
