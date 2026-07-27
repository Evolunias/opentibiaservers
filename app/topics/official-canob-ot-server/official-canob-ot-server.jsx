import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-ot-server');
}

export default function OfficialCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-canob-ot-server" />;
}
