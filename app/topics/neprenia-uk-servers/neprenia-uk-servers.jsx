import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-uk-servers');
}

export default function NepreniaUkServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-uk-servers" />;
}
