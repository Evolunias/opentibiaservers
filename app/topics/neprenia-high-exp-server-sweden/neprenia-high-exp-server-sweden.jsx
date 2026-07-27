import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-sweden');
}

export default function NepreniaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-sweden" />;
}
