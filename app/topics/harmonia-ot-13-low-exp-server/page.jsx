import HarmoniaOt13LowExpServerKeywordPage, { generateMetadata } from './harmonia-ot-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13LowExpServerKeywordPage />;
}
