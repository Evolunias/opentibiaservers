import RetroBaiakIlusionServerKeywordPage, { generateMetadata } from './retro-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroBaiakIlusionServerKeywordPage />;
}
