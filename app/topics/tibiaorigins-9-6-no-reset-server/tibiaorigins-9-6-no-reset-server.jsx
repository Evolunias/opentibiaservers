import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-9-6-no-reset-server');
}

export default function Tibiaorigins96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-9-6-no-reset-server" />;
}
