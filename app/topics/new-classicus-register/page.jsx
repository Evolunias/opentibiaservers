import NewClassicusRegisterKeywordPage, { generateMetadata } from './new-classicus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusRegisterKeywordPage />;
}
