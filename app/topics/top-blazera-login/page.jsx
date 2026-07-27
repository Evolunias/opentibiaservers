import TopBlazeraLoginKeywordPage, { generateMetadata } from './top-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraLoginKeywordPage />;
}
