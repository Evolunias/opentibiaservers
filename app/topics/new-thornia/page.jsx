import NewThorniaKeywordPage, { generateMetadata } from './new-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaKeywordPage />;
}
