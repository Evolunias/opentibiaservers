import NewRealeraOtKeywordPage, { generateMetadata } from './new-realera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraOtKeywordPage />;
}
