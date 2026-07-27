import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-germany');
}

export default function TibiaoriginsPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-germany" />;
}
