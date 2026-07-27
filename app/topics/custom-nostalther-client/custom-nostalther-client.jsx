import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-client');
}

export default function CustomNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-client" />;
}
