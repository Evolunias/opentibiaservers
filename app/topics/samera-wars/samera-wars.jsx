import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-wars');
}

export default function SameraWarsKeywordPage() {
  return <StaticKeywordPage slug="samera-wars" />;
}
