import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-ot');
}

export default function OfficialElderaOtKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-ot" />;
}
