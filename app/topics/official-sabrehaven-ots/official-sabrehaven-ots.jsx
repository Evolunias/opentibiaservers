import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-ots');
}

export default function OfficialSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-ots" />;
}
