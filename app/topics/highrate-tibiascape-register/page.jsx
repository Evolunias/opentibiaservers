import HighrateTibiascapeRegisterKeywordPage, { generateMetadata } from './highrate-tibiascape-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeRegisterKeywordPage />;
}
