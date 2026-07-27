import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-germany');
}

export default function NepreniaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-germany" />;
}
