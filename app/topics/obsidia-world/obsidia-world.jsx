import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-world');
}

export default function ObsidiaWorldKeywordPage() {
  return <StaticKeywordPage slug="obsidia-world" />;
}
