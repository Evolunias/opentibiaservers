import NewThorniaClientKeywordPage, { generateMetadata } from './new-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaClientKeywordPage />;
}
