import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland');
}

export default function OtlandKeywordPage() {
  return <StaticKeywordPage slug="otland" />;
}
