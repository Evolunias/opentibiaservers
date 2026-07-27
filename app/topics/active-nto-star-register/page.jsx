import ActiveNtoStarRegisterKeywordPage, { generateMetadata } from './active-nto-star-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNtoStarRegisterKeywordPage />;
}
