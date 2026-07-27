import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-no-reset-server');
}

export default function Tibiascape74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-no-reset-server" />;
}
