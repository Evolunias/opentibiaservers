import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-south-america-server');
}

export default function DemolidoresSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-south-america-server" />;
}
