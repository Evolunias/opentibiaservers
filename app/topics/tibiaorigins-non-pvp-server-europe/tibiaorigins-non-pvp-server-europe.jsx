import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-europe');
}

export default function TibiaoriginsNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-europe" />;
}
