import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-uk-servers');
}

export default function KasteriaUkServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-uk-servers" />;
}
