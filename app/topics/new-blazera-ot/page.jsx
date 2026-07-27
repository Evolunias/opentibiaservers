import NewBlazeraOtKeywordPage, { generateMetadata } from './new-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraOtKeywordPage />;
}
