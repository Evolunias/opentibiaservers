import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-uk-server');
}

export default function KasteriaUkServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-uk-server" />;
}
