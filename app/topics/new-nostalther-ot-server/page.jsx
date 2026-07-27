import NewNostaltherOtServerKeywordPage, { generateMetadata } from './new-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherOtServerKeywordPage />;
}
