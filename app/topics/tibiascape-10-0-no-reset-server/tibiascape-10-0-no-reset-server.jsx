import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-no-reset-server');
}

export default function Tibiascape100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-no-reset-server" />;
}
