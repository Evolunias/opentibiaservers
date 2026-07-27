import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-no-reset-server');
}

export default function Tibiaorigins13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-no-reset-server" />;
}
