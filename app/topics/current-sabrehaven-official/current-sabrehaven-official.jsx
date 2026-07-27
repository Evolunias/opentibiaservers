import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-official');
}

export default function CurrentSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-official" />;
}
