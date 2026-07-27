import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-no-reset-server');
}

export default function Tibijka76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-no-reset-server" />;
}
