import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-no-reset-server');
}

export default function Tibianus100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-no-reset-server" />;
}
