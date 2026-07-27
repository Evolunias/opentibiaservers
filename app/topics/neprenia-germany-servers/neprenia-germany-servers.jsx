import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-germany-servers');
}

export default function NepreniaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-germany-servers" />;
}
