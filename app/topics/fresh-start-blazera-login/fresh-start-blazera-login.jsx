import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-login');
}

export default function FreshStartBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-login" />;
}
