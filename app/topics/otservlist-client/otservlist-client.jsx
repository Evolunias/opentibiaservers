import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-client');
}

export default function OtservlistClientKeywordPage() {
  return <StaticKeywordPage slug="otservlist-client" />;
}
