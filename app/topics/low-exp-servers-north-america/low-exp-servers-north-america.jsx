import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-north-america');
}

export default function LowExpServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-north-america" />;
}
