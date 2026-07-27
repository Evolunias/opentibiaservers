import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-6-no-reset-server');
}

export default function Tibianus76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-6-no-reset-server" />;
}
