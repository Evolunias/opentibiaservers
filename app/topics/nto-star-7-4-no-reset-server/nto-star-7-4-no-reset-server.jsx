import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-no-reset-server');
}

export default function NtoStar74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-no-reset-server" />;
}
