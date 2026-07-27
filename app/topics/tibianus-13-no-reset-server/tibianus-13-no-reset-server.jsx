import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-no-reset-server');
}

export default function Tibianus13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-no-reset-server" />;
}
