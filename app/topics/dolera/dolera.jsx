import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera');
}

export default function DoleraKeywordPage() {
  return <StaticKeywordPage slug="dolera" />;
}
