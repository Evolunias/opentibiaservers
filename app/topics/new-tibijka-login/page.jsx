import NewTibijkaLoginKeywordPage, { generateMetadata } from './new-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaLoginKeywordPage />;
}
