import FreshStartRegisterUkKeywordPage, { generateMetadata } from './fresh-start-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRegisterUkKeywordPage />;
}
