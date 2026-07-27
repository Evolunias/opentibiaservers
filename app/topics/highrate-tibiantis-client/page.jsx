import HighrateTibiantisClientKeywordPage, { generateMetadata } from './highrate-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisClientKeywordPage />;
}
