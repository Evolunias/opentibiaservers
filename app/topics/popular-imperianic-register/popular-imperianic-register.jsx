import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-register');
}

export default function PopularImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-register" />;
}
