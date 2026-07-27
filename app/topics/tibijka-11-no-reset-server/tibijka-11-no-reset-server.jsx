import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-no-reset-server');
}

export default function Tibijka11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-no-reset-server" />;
}
