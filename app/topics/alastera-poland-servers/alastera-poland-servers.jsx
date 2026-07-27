import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-poland-servers');
}

export default function AlasteraPolandServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-poland-servers" />;
}
