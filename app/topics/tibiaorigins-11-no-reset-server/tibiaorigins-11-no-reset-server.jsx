import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-no-reset-server');
}

export default function Tibiaorigins11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-no-reset-server" />;
}
