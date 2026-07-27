import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-no-reset-server');
}

export default function Tibianus15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-no-reset-server" />;
}
