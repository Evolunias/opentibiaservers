import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-no-reset-server');
}

export default function Tibiaorigins12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-no-reset-server" />;
}
