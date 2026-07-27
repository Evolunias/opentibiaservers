import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-client');
}

export default function RealeraClientKeywordPage() {
  return <StaticKeywordPage slug="realera-client" />;
}
