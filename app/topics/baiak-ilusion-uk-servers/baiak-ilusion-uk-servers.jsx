import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-uk-servers');
}

export default function BaiakIlusionUkServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-uk-servers" />;
}
