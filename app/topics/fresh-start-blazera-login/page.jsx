import FreshStartBlazeraLoginKeywordPage, { generateMetadata } from './fresh-start-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraLoginKeywordPage />;
}
