import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-ot');
}

export default function OfficialMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-ot" />;
}
