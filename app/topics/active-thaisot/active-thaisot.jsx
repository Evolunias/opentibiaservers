import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot');
}

export default function ActiveThaisotKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot" />;
}
