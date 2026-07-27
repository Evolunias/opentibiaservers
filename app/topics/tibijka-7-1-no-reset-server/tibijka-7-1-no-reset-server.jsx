import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-no-reset-server');
}

export default function Tibijka71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-no-reset-server" />;
}
