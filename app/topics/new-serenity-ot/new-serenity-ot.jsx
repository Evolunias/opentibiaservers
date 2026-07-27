import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-ot');
}

export default function NewSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-ot" />;
}
