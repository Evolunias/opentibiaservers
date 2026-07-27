import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-ot-server');
}

export default function ActiveNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-ot-server" />;
}
