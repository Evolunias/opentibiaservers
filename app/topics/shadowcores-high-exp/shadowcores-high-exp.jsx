import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp');
}

export default function ShadowcoresHighExpKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp" />;
}
