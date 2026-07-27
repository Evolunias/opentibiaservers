import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-server');
}

export default function CustomNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-server" />;
}
