import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-world');
}

export default function HarmoniaWorldKeywordPage() {
  return <StaticKeywordPage slug="harmonia-world" />;
}
