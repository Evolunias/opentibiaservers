import HighrateTibiantisRegisterKeywordPage, { generateMetadata } from './highrate-tibiantis-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisRegisterKeywordPage />;
}
