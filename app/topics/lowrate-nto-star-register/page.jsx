import LowrateNtoStarRegisterKeywordPage, { generateMetadata } from './lowrate-nto-star-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNtoStarRegisterKeywordPage />;
}
