import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot');
}

export default function CustomThaisotKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot" />;
}
