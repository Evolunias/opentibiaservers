import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-south-america-server');
}

export default function TibiaoriginsSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-south-america-server" />;
}
