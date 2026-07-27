import HarmoniaOt11LowExpServerKeywordPage, { generateMetadata } from './harmonia-ot-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11LowExpServerKeywordPage />;
}
