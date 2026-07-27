import HarmoniaOt80LowExpServerKeywordPage, { generateMetadata } from './harmonia-ot-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt80LowExpServerKeywordPage />;
}
