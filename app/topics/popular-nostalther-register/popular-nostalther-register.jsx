import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-register');
}

export default function PopularNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-register" />;
}
