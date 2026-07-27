import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-brazil');
}

export default function OtlandBrazilKeywordPage() {
  return <StaticKeywordPage slug="otland-brazil" />;
}
