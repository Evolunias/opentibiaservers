import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-no-reset-server');
}

export default function Tibianus84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-no-reset-server" />;
}
