import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-usa');
}

export default function NepreniaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-usa" />;
}
