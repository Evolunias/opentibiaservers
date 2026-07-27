import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-brazil-servers');
}

export default function NepreniaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-brazil-servers" />;
}
