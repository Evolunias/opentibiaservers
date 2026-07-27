import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia');
}

export default function CustomThorniaKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia" />;
}
