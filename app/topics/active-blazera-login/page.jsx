import ActiveBlazeraLoginKeywordPage, { generateMetadata } from './active-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraLoginKeywordPage />;
}
