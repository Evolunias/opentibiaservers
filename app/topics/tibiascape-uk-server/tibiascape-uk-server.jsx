import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-uk-server');
}

export default function TibiascapeUkServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-uk-server" />;
}
