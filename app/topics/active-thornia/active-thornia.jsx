import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia');
}

export default function ActiveThorniaKeywordPage() {
  return <StaticKeywordPage slug="active-thornia" />;
}
