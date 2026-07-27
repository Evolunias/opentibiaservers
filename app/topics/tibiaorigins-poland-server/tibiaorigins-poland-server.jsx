import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-poland-server');
}

export default function TibiaoriginsPolandServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-poland-server" />;
}
