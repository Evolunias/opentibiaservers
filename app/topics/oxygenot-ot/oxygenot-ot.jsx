import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-ot');
}

export default function OxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-ot" />;
}
