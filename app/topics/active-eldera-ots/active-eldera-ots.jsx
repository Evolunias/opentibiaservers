import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-ots');
}

export default function ActiveElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-ots" />;
}
