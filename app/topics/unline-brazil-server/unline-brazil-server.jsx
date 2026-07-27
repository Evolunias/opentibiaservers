import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-brazil-server');
}

export default function UnlineBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="unline-brazil-server" />;
}
