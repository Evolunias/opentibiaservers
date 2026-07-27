import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-poland-server');
}

export default function NostaltherPolandServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-poland-server" />;
}
