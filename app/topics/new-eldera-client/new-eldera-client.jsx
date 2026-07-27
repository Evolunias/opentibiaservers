import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-client');
}

export default function NewElderaClientKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-client" />;
}
