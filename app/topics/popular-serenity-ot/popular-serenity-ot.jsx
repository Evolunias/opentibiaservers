import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-ot');
}

export default function PopularSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-ot" />;
}
