import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera');
}

export default function SameraKeywordPage() {
  return <StaticKeywordPage slug="samera" />;
}
