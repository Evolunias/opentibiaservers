import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-54-non-pvp-server');
}

export default function Tibiaorigins854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-54-non-pvp-server" />;
}
