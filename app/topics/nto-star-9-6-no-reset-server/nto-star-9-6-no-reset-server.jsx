import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-9-6-no-reset-server');
}

export default function NtoStar96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-9-6-no-reset-server" />;
}
