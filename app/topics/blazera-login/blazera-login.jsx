import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-login');
}

export default function BlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="blazera-login" />;
}
