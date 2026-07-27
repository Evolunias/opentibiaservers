import NewBlazeraLoginKeywordPage, { generateMetadata } from './new-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraLoginKeywordPage />;
}
