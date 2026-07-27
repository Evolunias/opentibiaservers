import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-1-non-pvp-server');
}

export default function Tibiascape71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-1-non-pvp-server" />;
}
