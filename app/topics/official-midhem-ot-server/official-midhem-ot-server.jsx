import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-ot-server');
}

export default function OfficialMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-ot-server" />;
}
