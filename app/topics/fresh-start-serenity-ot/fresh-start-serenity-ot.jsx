import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-ot');
}

export default function FreshStartSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-ot" />;
}
