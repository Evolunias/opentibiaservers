import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-no-reset-server');
}

export default function Tibiascape12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-no-reset-server" />;
}
