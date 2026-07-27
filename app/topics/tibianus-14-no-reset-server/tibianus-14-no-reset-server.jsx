import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-no-reset-server');
}

export default function Tibianus14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-no-reset-server" />;
}
