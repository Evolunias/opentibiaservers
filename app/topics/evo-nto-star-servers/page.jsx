import EvoNtoStarServersKeywordPage, { generateMetadata } from './evo-nto-star-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoNtoStarServersKeywordPage />;
}
