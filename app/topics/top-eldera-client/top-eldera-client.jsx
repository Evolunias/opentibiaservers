import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-client');
}

export default function TopElderaClientKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-client" />;
}
