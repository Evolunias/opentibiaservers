import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-1-no-reset-server');
}

export default function NtoStar81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-1-no-reset-server" />;
}
