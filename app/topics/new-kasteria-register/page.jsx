import NewKasteriaRegisterKeywordPage, { generateMetadata } from './new-kasteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaRegisterKeywordPage />;
}
