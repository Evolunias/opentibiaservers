import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-brazil-server');
}

export default function NepreniaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-brazil-server" />;
}
