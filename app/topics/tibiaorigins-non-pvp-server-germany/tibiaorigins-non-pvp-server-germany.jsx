import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-germany');
}

export default function TibiaoriginsNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-germany" />;
}
