import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-uk');
}

export default function NepreniaNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-uk" />;
}
