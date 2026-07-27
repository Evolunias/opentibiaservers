import TopBlazeraClientKeywordPage, { generateMetadata } from './top-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraClientKeywordPage />;
}
