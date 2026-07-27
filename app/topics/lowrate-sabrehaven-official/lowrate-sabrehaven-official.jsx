import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-official');
}

export default function LowrateSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-official" />;
}
