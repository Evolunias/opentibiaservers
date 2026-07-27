import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-server');
}

export default function NewRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-server" />;
}
