import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-north-america-servers');
}

export default function TibiaoriginsNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-north-america-servers" />;
}
