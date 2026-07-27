import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-register');
}

export default function TopImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-register" />;
}
