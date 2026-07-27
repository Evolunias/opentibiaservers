import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-latin-america-server');
}

export default function TibiaoriginsLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-latin-america-server" />;
}
