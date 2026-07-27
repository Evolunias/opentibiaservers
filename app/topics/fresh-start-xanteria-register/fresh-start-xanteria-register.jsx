import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-register');
}

export default function FreshStartXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-register" />;
}
