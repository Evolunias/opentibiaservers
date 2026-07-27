import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-brazil-servers');
}

export default function RuthlessChaosBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-brazil-servers" />;
}
