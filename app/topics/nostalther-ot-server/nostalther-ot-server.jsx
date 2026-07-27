import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-ot-server');
}

export default function NostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-ot-server" />;
}
