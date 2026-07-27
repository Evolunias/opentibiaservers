import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-ot');
}

export default function CurrentSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-ot" />;
}
