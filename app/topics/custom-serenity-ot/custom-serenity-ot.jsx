import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-ot');
}

export default function CustomSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-ot" />;
}
