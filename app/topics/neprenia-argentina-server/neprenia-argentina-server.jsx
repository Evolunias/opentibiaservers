import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-argentina-server');
}

export default function NepreniaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-argentina-server" />;
}
