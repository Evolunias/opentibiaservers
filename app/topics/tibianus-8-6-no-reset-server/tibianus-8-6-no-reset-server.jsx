import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-no-reset-server');
}

export default function Tibianus86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-no-reset-server" />;
}
