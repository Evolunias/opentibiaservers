import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-ot');
}

export default function LowrateTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-ot" />;
}
