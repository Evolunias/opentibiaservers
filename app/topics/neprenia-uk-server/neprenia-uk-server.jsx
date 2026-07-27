import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-uk-server');
}

export default function NepreniaUkServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-uk-server" />;
}
