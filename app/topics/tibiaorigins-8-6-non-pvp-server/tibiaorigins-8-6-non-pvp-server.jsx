import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-6-non-pvp-server');
}

export default function Tibiaorigins86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-6-non-pvp-server" />;
}
