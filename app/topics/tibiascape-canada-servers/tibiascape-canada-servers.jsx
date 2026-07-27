import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-canada-servers');
}

export default function TibiascapeCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-canada-servers" />;
}
