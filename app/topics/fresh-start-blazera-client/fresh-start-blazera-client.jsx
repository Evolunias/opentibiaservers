import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-client');
}

export default function FreshStartBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-client" />;
}
