import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-latin-america-servers');
}

export default function TibiaoriginsLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-latin-america-servers" />;
}
