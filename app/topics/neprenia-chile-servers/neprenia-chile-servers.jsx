import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-chile-servers');
}

export default function NepreniaChileServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-chile-servers" />;
}
