import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia');
}

export default function RefugiaKeywordPage() {
  return <StaticKeywordPage slug="refugia" />;
}
