import HarmoniaOt12LowExpServerKeywordPage, { generateMetadata } from './harmonia-ot-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12LowExpServerKeywordPage />;
}
