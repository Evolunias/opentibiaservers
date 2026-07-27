import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-login');
}

export default function ActiveElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-login" />;
}
