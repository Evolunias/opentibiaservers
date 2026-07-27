import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-france');
}

export default function DemolidoresBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-france" />;
}
