import CurrentAureraGlobalRegisterKeywordPage, { generateMetadata } from './current-aurera-global-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalRegisterKeywordPage />;
}
