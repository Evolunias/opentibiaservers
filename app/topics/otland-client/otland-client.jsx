import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-client');
}

export default function OtlandClientKeywordPage() {
  return <StaticKeywordPage slug="otland-client" />;
}
