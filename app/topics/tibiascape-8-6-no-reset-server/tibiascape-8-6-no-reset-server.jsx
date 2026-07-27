import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-no-reset-server');
}

export default function Tibiascape86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-no-reset-server" />;
}
