import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-no-reset-server');
}

export default function NtoStar15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-no-reset-server" />;
}
