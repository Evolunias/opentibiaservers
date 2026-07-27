import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-brazil-server');
}

export default function LumineraBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-brazil-server" />;
}
