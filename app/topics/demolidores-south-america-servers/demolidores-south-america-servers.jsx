import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-south-america-servers');
}

export default function DemolidoresSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-south-america-servers" />;
}
