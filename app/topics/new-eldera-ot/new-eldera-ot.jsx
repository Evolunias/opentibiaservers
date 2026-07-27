import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-ot');
}

export default function NewElderaOtKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-ot" />;
}
