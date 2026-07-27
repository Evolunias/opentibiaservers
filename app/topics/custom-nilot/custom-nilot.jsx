import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot');
}

export default function CustomNilotKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot" />;
}
