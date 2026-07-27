import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-server');
}

export default function NewBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-server" />;
}
