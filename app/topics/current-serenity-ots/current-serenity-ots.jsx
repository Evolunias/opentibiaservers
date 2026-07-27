import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-ots');
}

export default function CurrentSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-ots" />;
}
