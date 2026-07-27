import NewCoxaotRegisterKeywordPage, { generateMetadata } from './new-coxaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotRegisterKeywordPage />;
}
