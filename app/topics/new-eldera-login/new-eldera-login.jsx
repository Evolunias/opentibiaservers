import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-login');
}

export default function NewElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-login" />;
}
