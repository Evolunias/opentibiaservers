import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-ots');
}

export default function OxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-ots" />;
}
