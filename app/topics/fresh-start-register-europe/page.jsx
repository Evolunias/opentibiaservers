import FreshStartRegisterEuropeKeywordPage, { generateMetadata } from './fresh-start-register-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRegisterEuropeKeywordPage />;
}
