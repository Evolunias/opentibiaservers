import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-ot-server');
}

export default function OfficialThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-ot-server" />;
}
