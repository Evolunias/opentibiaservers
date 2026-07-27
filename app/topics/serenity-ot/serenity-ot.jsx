import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-ot');
}

export default function SerenityOtKeywordPage() {
  return <StaticKeywordPage slug="serenity-ot" />;
}
