import PopularLumineraRegisterKeywordPage, { generateMetadata } from './popular-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraRegisterKeywordPage />;
}
