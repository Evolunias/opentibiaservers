import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-usa-server');
}

export default function TibiaoriginsUsaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-usa-server" />;
}
