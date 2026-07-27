import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-no-reset-server');
}

export default function Tibiaorigins81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-no-reset-server" />;
}
