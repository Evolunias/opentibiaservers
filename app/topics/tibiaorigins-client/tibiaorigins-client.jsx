import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-client');
}

export default function TibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-client" />;
}
