import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-no-reset-server');
}

export default function Tibijka15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-no-reset-server" />;
}
