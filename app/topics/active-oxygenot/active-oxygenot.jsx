import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot');
}

export default function ActiveOxygenotKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot" />;
}
