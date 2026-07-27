import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-no-reset-server');
}

export default function Tibijka14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-no-reset-server" />;
}
