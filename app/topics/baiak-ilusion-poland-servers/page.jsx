import BaiakIlusionPolandServersKeywordPage, { generateMetadata } from './baiak-ilusion-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionPolandServersKeywordPage />;
}
