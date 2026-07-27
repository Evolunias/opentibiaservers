import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-usa-servers');
}

export default function TibiaoriginsUsaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-usa-servers" />;
}
