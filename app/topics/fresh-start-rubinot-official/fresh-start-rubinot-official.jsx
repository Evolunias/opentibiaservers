import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-official');
}

export default function FreshStartRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-official" />;
}
