import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-no-reset-server');
}

export default function Tibiaorigins71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-no-reset-server" />;
}
