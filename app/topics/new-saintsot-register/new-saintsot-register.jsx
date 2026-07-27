import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-register');
}

export default function NewSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-register" />;
}
