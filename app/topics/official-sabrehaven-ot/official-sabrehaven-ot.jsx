import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-ot');
}

export default function OfficialSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-ot" />;
}
