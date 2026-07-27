import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus');
}

export default function CustomClassicusKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus" />;
}
