import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-ot-server');
}

export default function CustomNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-ot-server" />;
}
