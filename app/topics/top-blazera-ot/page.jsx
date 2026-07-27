import TopBlazeraOtKeywordPage, { generateMetadata } from './top-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraOtKeywordPage />;
}
