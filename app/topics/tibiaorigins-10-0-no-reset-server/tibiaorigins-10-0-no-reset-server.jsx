import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-no-reset-server');
}

export default function Tibiaorigins100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-no-reset-server" />;
}
