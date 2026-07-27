import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic');
}

export default function CustomImperianicKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic" />;
}
