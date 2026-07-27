import HighrateTibiantisOtServerKeywordPage, { generateMetadata } from './highrate-tibiantis-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisOtServerKeywordPage />;
}
