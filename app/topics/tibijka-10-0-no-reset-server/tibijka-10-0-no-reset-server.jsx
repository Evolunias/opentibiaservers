import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-no-reset-server');
}

export default function Tibijka100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-no-reset-server" />;
}
