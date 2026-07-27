import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-no-reset-server');
}

export default function Tibiaorigins76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-no-reset-server" />;
}
