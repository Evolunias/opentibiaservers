import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-germany-server');
}

export default function TibiaoriginsGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-germany-server" />;
}
