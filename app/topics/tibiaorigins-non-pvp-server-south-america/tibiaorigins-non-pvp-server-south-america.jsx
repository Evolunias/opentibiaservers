import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-south-america');
}

export default function TibiaoriginsNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-south-america" />;
}
