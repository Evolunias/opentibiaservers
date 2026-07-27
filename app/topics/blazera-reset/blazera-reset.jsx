import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-reset');
}

export default function BlazeraResetKeywordPage() {
  return <StaticKeywordPage slug="blazera-reset" />;
}
