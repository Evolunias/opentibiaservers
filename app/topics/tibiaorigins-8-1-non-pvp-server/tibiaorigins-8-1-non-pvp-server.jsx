import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-non-pvp-server');
}

export default function Tibiaorigins81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-non-pvp-server" />;
}
