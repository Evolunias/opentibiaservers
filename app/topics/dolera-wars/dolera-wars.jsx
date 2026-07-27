import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-wars');
}

export default function DoleraWarsKeywordPage() {
  return <StaticKeywordPage slug="dolera-wars" />;
}
