import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-south-america-servers');
}

export default function ShadowcoresSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-south-america-servers" />;
}
