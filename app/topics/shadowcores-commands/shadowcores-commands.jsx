import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-commands');
}

export default function ShadowcoresCommandsKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-commands" />;
}
