import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-ots');
}

export default function FreshStartSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-ots" />;
}
