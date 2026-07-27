import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-register');
}

export default function FreshStartSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-register" />;
}
