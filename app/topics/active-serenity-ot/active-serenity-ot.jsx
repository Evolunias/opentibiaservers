import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-ot');
}

export default function ActiveSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-ot" />;
}
