import FreshStartRegisterCanadaKeywordPage, { generateMetadata } from './fresh-start-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRegisterCanadaKeywordPage />;
}
