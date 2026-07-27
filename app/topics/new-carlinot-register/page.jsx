import NewCarlinotRegisterKeywordPage, { generateMetadata } from './new-carlinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotRegisterKeywordPage />;
}
