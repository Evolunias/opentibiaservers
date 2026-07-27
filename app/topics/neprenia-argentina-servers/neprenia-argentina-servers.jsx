import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-argentina-servers');
}

export default function NepreniaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-argentina-servers" />;
}
