import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-register');
}

export default function CustomImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-register" />;
}
