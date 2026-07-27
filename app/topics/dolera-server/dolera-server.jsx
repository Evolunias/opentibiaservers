import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-server');
}

export default function DoleraServerKeywordPage() {
  return <StaticKeywordPage slug="dolera-server" />;
}
