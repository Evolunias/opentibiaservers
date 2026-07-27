import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-france-servers');
}

export default function DemolidoresFranceServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-france-servers" />;
}
