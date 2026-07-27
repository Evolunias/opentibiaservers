import TopBlazeraKeywordPage, { generateMetadata } from './top-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraKeywordPage />;
}
