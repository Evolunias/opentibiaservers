import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-server');
}

export default function NewRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="new-realera-server" />;
}
