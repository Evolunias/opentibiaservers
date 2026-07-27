import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-poland-servers');
}

export default function NostaltherPolandServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-poland-servers" />;
}
