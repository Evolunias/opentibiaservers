import NewTibiaraRegisterKeywordPage, { generateMetadata } from './new-tibiara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraRegisterKeywordPage />;
}
