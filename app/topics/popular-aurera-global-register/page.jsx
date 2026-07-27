import PopularAureraGlobalRegisterKeywordPage, { generateMetadata } from './popular-aurera-global-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAureraGlobalRegisterKeywordPage />;
}
