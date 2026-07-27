import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-brazil');
}

export default function NepreniaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-brazil" />;
}
