import NewThorniaLoginKeywordPage, { generateMetadata } from './new-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaLoginKeywordPage />;
}
