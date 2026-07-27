import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-europe-servers');
}

export default function TibiaoriginsEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-europe-servers" />;
}
