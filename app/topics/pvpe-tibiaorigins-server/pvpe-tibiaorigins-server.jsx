import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibiaorigins-server');
}

export default function PvpeTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibiaorigins-server" />;
}
