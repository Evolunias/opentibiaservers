import NewNtoStarRegisterKeywordPage, { generateMetadata } from './new-nto-star-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNtoStarRegisterKeywordPage />;
}
