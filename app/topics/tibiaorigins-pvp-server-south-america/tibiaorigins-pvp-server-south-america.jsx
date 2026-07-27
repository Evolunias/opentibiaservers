import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-south-america');
}

export default function TibiaoriginsPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-south-america" />;
}
