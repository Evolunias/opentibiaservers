import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera');
}

export default function NewElderaKeywordPage() {
  return <StaticKeywordPage slug="new-eldera" />;
}
