import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-0-no-reset-server');
}

export default function Tibiaorigins80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-0-no-reset-server" />;
}
