import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-no-reset-server');
}

export default function Tibiascape11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-no-reset-server" />;
}
