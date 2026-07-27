import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-wars');
}

export default function TibiaoriginsWarsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-wars" />;
}
