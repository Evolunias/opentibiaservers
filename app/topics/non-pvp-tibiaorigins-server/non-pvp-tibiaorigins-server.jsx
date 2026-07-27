import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibiaorigins-server');
}

export default function NonPvpTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibiaorigins-server" />;
}
