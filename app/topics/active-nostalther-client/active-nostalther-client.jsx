import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-client');
}

export default function ActiveNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-client" />;
}
