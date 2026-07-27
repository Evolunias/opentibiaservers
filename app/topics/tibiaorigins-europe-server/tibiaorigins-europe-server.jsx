import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-europe-server');
}

export default function TibiaoriginsEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-europe-server" />;
}
