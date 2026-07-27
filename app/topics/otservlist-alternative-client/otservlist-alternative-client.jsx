import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-client');
}

export default function OtservlistAlternativeClientKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-client" />;
}
