import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-usa-servers');
}

export default function TibiantisUsaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-usa-servers" />;
}
