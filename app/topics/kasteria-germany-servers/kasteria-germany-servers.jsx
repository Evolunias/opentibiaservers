import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-germany-servers');
}

export default function KasteriaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-germany-servers" />;
}
