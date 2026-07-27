import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-9-6-pvp-server');
}

export default function Tibiaorigins96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-9-6-pvp-server" />;
}
