import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-sweden');
}

export default function NepreniaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-sweden" />;
}
