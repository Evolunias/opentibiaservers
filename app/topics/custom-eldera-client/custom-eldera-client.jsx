import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-client');
}

export default function CustomElderaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-client" />;
}
