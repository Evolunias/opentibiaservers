import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-argentina');
}

export default function NepreniaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-argentina" />;
}
