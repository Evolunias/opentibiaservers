import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-no-reset-server');
}

export default function Tibiaorigins14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-no-reset-server" />;
}
