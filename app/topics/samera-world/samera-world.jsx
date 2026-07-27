import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-world');
}

export default function SameraWorldKeywordPage() {
  return <StaticKeywordPage slug="samera-world" />;
}
