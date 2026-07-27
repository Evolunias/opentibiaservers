import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-official');
}

export default function AureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-official" />;
}
