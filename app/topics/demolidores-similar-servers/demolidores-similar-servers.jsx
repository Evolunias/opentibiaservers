import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-similar-servers');
}

export default function DemolidoresSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-similar-servers" />;
}
