import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-usa-server');
}

export default function AlasteraUsaServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-usa-server" />;
}
