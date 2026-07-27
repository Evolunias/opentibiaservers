import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus');
}

export default function ActiveClassicusKeywordPage() {
  return <StaticKeywordPage slug="active-classicus" />;
}
