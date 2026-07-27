import NewTibianusRegisterKeywordPage, { generateMetadata } from './new-tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusRegisterKeywordPage />;
}
