import NewElderaClientKeywordPage, { generateMetadata } from './new-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaClientKeywordPage />;
}
