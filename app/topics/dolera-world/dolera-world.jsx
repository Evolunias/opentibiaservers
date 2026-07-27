import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-world');
}

export default function DoleraWorldKeywordPage() {
  return <StaticKeywordPage slug="dolera-world" />;
}
