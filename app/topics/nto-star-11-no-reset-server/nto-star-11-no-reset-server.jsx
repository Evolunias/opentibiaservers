import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-no-reset-server');
}

export default function NtoStar11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-no-reset-server" />;
}
