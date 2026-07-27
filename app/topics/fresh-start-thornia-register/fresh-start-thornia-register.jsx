import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-register');
}

export default function FreshStartThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-register" />;
}
