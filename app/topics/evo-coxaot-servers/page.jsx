import EvoCoxaotServersKeywordPage, { generateMetadata } from './evo-coxaot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoCoxaotServersKeywordPage />;
}
