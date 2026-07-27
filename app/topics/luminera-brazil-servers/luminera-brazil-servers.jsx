import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-brazil-servers');
}

export default function LumineraBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-brazil-servers" />;
}
