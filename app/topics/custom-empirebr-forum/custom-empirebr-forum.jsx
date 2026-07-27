import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-forum');
}

export default function CustomEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-forum" />;
}
