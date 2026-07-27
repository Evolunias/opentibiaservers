import HarmoniaOt14LowExpServerKeywordPage, { generateMetadata } from './harmonia-ot-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14LowExpServerKeywordPage />;
}
