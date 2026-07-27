import FreshStartRegisterUsaKeywordPage, { generateMetadata } from './fresh-start-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRegisterUsaKeywordPage />;
}
