import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-ot');
}

export default function OfficialClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-ot" />;
}
