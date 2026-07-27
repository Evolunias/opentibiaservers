import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-france-servers');
}

export default function TibiaoriginsFranceServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-france-servers" />;
}
