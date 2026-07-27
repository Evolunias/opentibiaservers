import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-register');
}

export default function NewXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-register" />;
}
