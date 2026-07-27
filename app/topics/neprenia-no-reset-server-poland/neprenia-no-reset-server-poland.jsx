import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-poland');
}

export default function NepreniaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-poland" />;
}
