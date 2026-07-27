import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-brazil-server');
}

export default function RuthlessChaosBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-brazil-server" />;
}
