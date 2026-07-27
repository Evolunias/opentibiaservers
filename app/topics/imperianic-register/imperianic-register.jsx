import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-register');
}

export default function ImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="imperianic-register" />;
}
