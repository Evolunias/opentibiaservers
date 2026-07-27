import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-no-reset-server');
}

export default function Tibiascape96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-no-reset-server" />;
}
