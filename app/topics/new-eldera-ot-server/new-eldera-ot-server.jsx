import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-ot-server');
}

export default function NewElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-ot-server" />;
}
