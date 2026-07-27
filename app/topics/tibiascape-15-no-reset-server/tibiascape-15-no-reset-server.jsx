import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-no-reset-server');
}

export default function Tibiascape15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-no-reset-server" />;
}
