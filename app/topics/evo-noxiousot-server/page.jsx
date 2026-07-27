import EvoNoxiousotServerKeywordPage, { generateMetadata } from './evo-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoNoxiousotServerKeywordPage />;
}
