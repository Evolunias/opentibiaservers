import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-register');
}

export default function SaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="saintsot-register" />;
}
