import EvoNoxiousotServersKeywordPage, { generateMetadata } from './evo-noxiousot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoNoxiousotServersKeywordPage />;
}
