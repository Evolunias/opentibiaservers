import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp');
}

export default function TibiascapeHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp" />;
}
