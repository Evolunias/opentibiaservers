import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-official');
}

export default function NewRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-official" />;
}
