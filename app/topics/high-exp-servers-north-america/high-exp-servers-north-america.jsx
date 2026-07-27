import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-north-america');
}

export default function HighExpServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-north-america" />;
}
