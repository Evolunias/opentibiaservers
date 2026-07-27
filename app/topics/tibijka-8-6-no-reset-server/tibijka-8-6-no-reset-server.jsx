import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-no-reset-server');
}

export default function Tibijka86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-no-reset-server" />;
}
