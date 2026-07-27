import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-no-reset-server');
}

export default function Tibijka13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-no-reset-server" />;
}
