import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-mexico');
}

export default function NepreniaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-mexico" />;
}
