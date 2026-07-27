import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-no-reset-server');
}

export default function Tibiaorigins15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-no-reset-server" />;
}
