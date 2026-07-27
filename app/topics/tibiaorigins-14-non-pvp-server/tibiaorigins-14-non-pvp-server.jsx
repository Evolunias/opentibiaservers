import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-non-pvp-server');
}

export default function Tibiaorigins14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-non-pvp-server" />;
}
