import SameraCommunityKeywordPage, { generateMetadata } from './samera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraCommunityKeywordPage />;
}
