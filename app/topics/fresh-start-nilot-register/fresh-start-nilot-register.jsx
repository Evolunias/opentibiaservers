import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-register');
}

export default function FreshStartNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-register" />;
}
