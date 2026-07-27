import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-register');
}

export default function PopularSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-register" />;
}
