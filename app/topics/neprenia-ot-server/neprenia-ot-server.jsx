import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-ot-server');
}

export default function NepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-ot-server" />;
}
