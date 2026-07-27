import HighrateTibijkaRegisterKeywordPage, { generateMetadata } from './highrate-tibijka-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibijkaRegisterKeywordPage />;
}
