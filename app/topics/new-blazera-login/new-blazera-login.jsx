import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-login');
}

export default function NewBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-login" />;
}
