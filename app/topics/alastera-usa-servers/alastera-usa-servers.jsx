import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-usa-servers');
}

export default function AlasteraUsaServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-usa-servers" />;
}
