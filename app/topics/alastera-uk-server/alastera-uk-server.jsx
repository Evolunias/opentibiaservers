import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-uk-server');
}

export default function AlasteraUkServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-uk-server" />;
}
