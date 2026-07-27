import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-register');
}

export default function CurrentImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-register" />;
}
