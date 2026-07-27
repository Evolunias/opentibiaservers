import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic');
}

export default function ActiveImperianicKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic" />;
}
