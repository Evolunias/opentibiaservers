import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-germany-servers');
}

export default function TibiantisGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-germany-servers" />;
}
