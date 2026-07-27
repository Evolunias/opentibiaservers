import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-server');
}

export default function TibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-server" />;
}
