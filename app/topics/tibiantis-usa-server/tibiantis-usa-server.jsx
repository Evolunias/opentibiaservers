import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-usa-server');
}

export default function TibiantisUsaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-usa-server" />;
}
