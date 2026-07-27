import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-ots');
}

export default function FreshStartTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-ots" />;
}
