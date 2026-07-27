import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-germany-servers');
}

export default function AlasteraGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-germany-servers" />;
}
