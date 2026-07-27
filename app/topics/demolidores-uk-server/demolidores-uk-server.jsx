import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-uk-server');
}

export default function DemolidoresUkServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-uk-server" />;
}
