import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-ot');
}

export default function TopSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-ot" />;
}
