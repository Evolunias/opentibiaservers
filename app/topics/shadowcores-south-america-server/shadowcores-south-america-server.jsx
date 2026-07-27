import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-south-america-server');
}

export default function ShadowcoresSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-south-america-server" />;
}
