import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-france-server');
}

export default function DemolidoresFranceServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-france-server" />;
}
