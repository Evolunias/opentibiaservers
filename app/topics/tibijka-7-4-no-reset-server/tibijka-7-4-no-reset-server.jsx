import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-no-reset-server');
}

export default function Tibijka74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-no-reset-server" />;
}
