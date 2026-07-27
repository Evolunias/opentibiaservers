import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-pvp-server');
}

export default function Tibiaorigins76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-pvp-server" />;
}
