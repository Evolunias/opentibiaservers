import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-72-no-reset-server');
}

export default function Tibiascape772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-72-no-reset-server" />;
}
