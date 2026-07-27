import HighrateTibiantisServerKeywordPage, { generateMetadata } from './highrate-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisServerKeywordPage />;
}
