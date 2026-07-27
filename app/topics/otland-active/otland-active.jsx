import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-active');
}

export default function OtlandActiveKeywordPage() {
  return <StaticKeywordPage slug="otland-active" />;
}
