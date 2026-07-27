import BaiakIlusionPolandServerKeywordPage, { generateMetadata } from './baiak-ilusion-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionPolandServerKeywordPage />;
}
