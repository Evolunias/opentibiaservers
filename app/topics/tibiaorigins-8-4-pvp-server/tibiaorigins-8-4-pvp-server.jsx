import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-pvp-server');
}

export default function Tibiaorigins84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-pvp-server" />;
}
