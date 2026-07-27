import ActiveKasteriaRegisterKeywordPage, { generateMetadata } from './active-kasteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaRegisterKeywordPage />;
}
