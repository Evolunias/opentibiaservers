import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-no-reset-server');
}

export default function Tibiaorigins84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-no-reset-server" />;
}
