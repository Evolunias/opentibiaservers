import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-official');
}

export default function BestSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-official" />;
}
