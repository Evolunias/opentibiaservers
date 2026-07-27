import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-server');
}

export default function ActiveNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-server" />;
}
