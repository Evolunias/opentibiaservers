import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-ot-server');
}

export default function OfficialElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-ot-server" />;
}
