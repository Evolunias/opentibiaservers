import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-server');
}

export default function FreshStartBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-server" />;
}
