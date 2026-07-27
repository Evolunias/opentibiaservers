import RookgaardTalesUkServersKeywordPage, { generateMetadata } from './rookgaard-tales-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesUkServersKeywordPage />;
}
