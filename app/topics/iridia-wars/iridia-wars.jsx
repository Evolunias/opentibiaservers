import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-wars');
}

export default function IridiaWarsKeywordPage() {
  return <StaticKeywordPage slug="iridia-wars" />;
}
