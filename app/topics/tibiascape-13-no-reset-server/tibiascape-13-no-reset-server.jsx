import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-no-reset-server');
}

export default function Tibiascape13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-no-reset-server" />;
}
