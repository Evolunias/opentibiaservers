import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-6-no-reset-server');
}

export default function NtoStar76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-6-no-reset-server" />;
}
