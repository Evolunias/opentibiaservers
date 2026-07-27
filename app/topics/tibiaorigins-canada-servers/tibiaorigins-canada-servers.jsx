import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-canada-servers');
}

export default function TibiaoriginsCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-canada-servers" />;
}
