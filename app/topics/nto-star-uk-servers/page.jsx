import NtoStarUkServersKeywordPage, { generateMetadata } from './nto-star-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarUkServersKeywordPage />;
}
