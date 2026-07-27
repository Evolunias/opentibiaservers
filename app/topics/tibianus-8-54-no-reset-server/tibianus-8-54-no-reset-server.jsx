import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-54-no-reset-server');
}

export default function Tibianus854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-54-no-reset-server" />;
}
