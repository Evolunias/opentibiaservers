import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-sweden');
}

export default function NepreniaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-sweden" />;
}
