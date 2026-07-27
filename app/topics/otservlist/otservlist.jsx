import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist');
}

export default function OtservlistKeywordPage() {
  return <StaticKeywordPage slug="otservlist" />;
}
