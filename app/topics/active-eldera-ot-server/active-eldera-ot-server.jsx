import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-ot-server');
}

export default function ActiveElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-ot-server" />;
}
