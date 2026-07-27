import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-mexico');
}

export default function NepreniaNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-mexico" />;
}
