import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-canada-server');
}

export default function TibiaoriginsCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-canada-server" />;
}
