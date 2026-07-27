import NewNostaltherOtKeywordPage, { generateMetadata } from './new-nostalther-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherOtKeywordPage />;
}
