import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-uk-servers');
}

export default function TibiascapeUkServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-uk-servers" />;
}
