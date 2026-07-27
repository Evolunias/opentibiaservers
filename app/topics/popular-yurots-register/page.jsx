import PopularYurotsRegisterKeywordPage, { generateMetadata } from './popular-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsRegisterKeywordPage />;
}
