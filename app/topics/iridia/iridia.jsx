import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia');
}

export default function IridiaKeywordPage() {
  return <StaticKeywordPage slug="iridia" />;
}
