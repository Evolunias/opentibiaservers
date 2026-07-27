import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-no-reset-server');
}

export default function Tibijka12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-no-reset-server" />;
}
