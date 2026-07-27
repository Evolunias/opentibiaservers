import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-north-america-server');
}

export default function TibiaoriginsNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-north-america-server" />;
}
