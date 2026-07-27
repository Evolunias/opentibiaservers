import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-client');
}

export default function FreshStartElderaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-client" />;
}
