import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-ot');
}

export default function OfficialImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-ot" />;
}
