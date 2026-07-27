import NewAureraGlobalRegisterKeywordPage, { generateMetadata } from './new-aurera-global-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAureraGlobalRegisterKeywordPage />;
}
