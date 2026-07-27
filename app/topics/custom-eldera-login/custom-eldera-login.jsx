import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-login');
}

export default function CustomElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-login" />;
}
