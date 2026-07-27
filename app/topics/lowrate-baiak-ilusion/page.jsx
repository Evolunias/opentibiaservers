import LowrateBaiakIlusionKeywordPage, { generateMetadata } from './lowrate-baiak-ilusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBaiakIlusionKeywordPage />;
}
