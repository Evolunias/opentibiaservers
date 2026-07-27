import NewNepreniaRegisterKeywordPage, { generateMetadata } from './new-neprenia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaRegisterKeywordPage />;
}
