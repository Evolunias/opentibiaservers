import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-poland-servers');
}

export default function TibiaoriginsPolandServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-poland-servers" />;
}
