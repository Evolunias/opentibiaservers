import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-no-reset-server');
}

export default function Tibijka81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-no-reset-server" />;
}
