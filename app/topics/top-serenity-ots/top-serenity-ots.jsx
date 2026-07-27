import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-ots');
}

export default function TopSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-ots" />;
}
