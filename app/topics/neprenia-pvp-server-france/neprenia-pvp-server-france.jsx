import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-france');
}

export default function NepreniaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-france" />;
}
