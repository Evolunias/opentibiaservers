import NewTibiascapeRegisterKeywordPage, { generateMetadata } from './new-tibiascape-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeRegisterKeywordPage />;
}
