import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-official');
}

export default function BestSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-official" />;
}
