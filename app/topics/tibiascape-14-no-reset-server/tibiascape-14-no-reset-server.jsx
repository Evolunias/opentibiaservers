import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-no-reset-server');
}

export default function Tibiascape14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-no-reset-server" />;
}
