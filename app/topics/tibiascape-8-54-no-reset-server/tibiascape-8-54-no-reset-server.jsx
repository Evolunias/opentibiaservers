import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-54-no-reset-server');
}

export default function Tibiascape854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-54-no-reset-server" />;
}
