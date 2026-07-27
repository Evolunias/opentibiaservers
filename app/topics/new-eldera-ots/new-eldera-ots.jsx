import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-ots');
}

export default function NewElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-ots" />;
}
