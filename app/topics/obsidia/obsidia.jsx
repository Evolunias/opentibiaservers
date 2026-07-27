import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia');
}

export default function ObsidiaKeywordPage() {
  return <StaticKeywordPage slug="obsidia" />;
}
