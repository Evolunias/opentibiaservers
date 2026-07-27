import HighrateBaiakIlusionKeywordPage, { generateMetadata } from './highrate-baiak-ilusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBaiakIlusionKeywordPage />;
}
