import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-europe');
}

export default function NepreniaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-europe" />;
}
