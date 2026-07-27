import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-ot-server');
}

export default function CustomNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-ot-server" />;
}
