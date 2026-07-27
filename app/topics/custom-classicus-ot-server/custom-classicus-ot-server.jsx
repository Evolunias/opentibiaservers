import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-ot-server');
}

export default function CustomClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-ot-server" />;
}
