import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-france-server');
}

export default function NepreniaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-france-server" />;
}
