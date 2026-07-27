import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-official');
}

export default function NewAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-official" />;
}
