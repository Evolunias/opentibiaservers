import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-france-server');
}

export default function TibiaoriginsFranceServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-france-server" />;
}
