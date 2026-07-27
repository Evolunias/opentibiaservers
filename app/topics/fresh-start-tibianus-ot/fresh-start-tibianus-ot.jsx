import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-ot');
}

export default function FreshStartTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-ot" />;
}
