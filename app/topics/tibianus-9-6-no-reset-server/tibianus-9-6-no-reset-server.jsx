import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-no-reset-server');
}

export default function Tibianus96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-no-reset-server" />;
}
